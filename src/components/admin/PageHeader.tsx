interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold font-sans text-white">{title}</h1>
        {description && <p className="mt-2 text-gray-400 font-mono text-sm">{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
