import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import fs from "fs/promises";
import path from "path";

interface SitemapRoute {
  route: string;
  lastModified?: Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

/**
 * Manual routes with custom configuration
 * Add routes here that need specific lastModified dates or priorities
 */
const manualRoutes: SitemapRoute[] = [
  {
    route: "/",
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    route: "/services",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    route: "/fleet",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    route: "/about",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    route: "/contacts",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    route: "/ride",
    changeFrequency: "weekly",
    priority: 0.8,
  },
];

/**
 * Service IDs for dynamic routes
 */
const serviceIds = [
  "weddings",
  "corporate-services",
  "party-bus-rentals",
  "bachelorette-parties",
  "nights-on-the-town",
  "airport-transfers",
  "global-services",
  "travel-planning",
  "event-planning",
  "sporting-events",
  "tours-sight-seeing",
];

const getFiles = async (
  dir: string,
  extensions: string[]
): Promise<string[]> => {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];

    for (const entry of entries) {
      // Skip route groups (folders with parentheses)
      if (entry.parentPath.includes("(")) continue;

      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const nestedFiles = await getFiles(fullPath, extensions);
        files.push(...nestedFiles);
      } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
        files.push(fullPath);
      }
    }

    return files;
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
};

const getBasePath = async (): Promise<string> => {
  const srcAppPath = path.join(process.cwd(), "src/app");
  const appPath = path.join(process.cwd(), "app");

  try {
    await fs.access(srcAppPath);
    return srcAppPath;
  } catch {
    return appPath;
  }
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const extensions = [".tsx", ".jsx", ".mdx"];
  const basePath = await getBasePath();
  const pages = await getFiles(basePath, extensions);
  const { baseUrl } = siteConfig;

  // Generate routes from file system
  const fileSystemRoutes = await Promise.all(
    pages
      .filter((filePath) => /page\.(tsx|jsx|mdx)$/.test(filePath))
      .map(async (filePath) => {
        const relativePath = path.relative(basePath, path.dirname(filePath));
        const route =
          relativePath === ""
            ? "/"
            : `/${relativePath
                .replace(/\\/g, "/")
                .replace(/\([^\/]+\)/g, "")
                .replace(/\/\/+/g, "/")
                .replace(/^\/|\/$/g, "")}`;

        return route;
      })
  );

  // Filter out dynamic routes and special folders
  const staticRoutes = fileSystemRoutes
    .filter((route) => !route.includes("["))
    .filter((route) => !route.includes("@"))
    .filter((route) => !route.includes("api"));

  // Generate service routes dynamically
  const serviceRoutes = serviceIds.map((id) => `/services/${id}`);

  // Combine all routes
  const allRoutes = [...staticRoutes, ...serviceRoutes];

  return allRoutes.map((route) => {
    const manual = manualRoutes.find((entry) => entry.route === route);

    return {
      url: `${baseUrl}${route}`,
      lastModified: manual?.lastModified || new Date(),
      changeFrequency: manual?.changeFrequency || "weekly",
      priority: manual?.priority || 0.5,
    };
  });
}
