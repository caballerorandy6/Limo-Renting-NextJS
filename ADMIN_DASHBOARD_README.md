# 🎯 Admin Dashboard - Guía de Implementación

Este documento te guiará para implementar la funcionalidad del dashboard de administración.

## 📁 Estructura Creada

```
src/
├── app/
│   └── admin/
│       ├── layout.tsx              # Layout principal con sidebar
│       ├── page.tsx                # Redirect a /dashboard
│       ├── dashboard/
│       │   └── page.tsx            # Página de overview con estadísticas
│       ├── vehicles/
│       │   └── page.tsx            # Gestión de vehículos
│       ├── bookings/
│       │   └── page.tsx            # Gestión de reservas
│       ├── services/
│       │   └── page.tsx            # Gestión de servicios
│       └── contacts/
│           └── page.tsx            # Gestión de mensajes
│
└── components/
    └── admin/
        ├── AdminSidebar.tsx        # Navegación lateral
        ├── PageHeader.tsx          # Header reutilizable
        ├── StatCard.tsx            # Card de estadísticas
        └── EmptyState.tsx          # Estado vacío

```

## 🎨 Características Visuales

### ✅ Ya Implementado (Solo UI)

- **Sidebar de navegación** con iconos y estados activos
- **Layout responsivo** con overflow handling
- **Tablas de datos** con estados hover
- **Botones de acción** (Create, Edit, Delete, View)
- **Cards de estadísticas** con tendencias
- **Estados vacíos** para cuando no hay datos
- **Status badges** con colores semánticos
- **Dark theme** consistente con el resto de la app

### ❌ NO Implementado (Tu Práctica)

- Fetching de datos desde el backend
- Validación de formularios
- Modales/Dialogs para crear/editar
- Confirmaciones de eliminación
- Filtros y búsquedas
- Paginación
- Manejo de errores
- Loading states
- Protección de rutas (verificar que es admin)

---

## 🚀 Acceso al Dashboard

Para acceder al dashboard:

1. Ve a: `http://localhost:3000/admin`
2. Automáticamente redirige a: `http://localhost:3000/admin/dashboard`

---

## 📝 Tareas de Implementación (Tu Práctica)

### 1. **Proteger las Rutas de Admin**

**Archivo:** `src/app/admin/layout.tsx`

```typescript
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { userId } = useAuth();
  const { user } = useUser();

  // TODO: Verificar si el usuario es admin
  const isAdmin = user?.publicMetadata?.role === "admin";

  if (!userId || !isAdmin) {
    redirect("/");
  }

  return (
    // ... resto del layout
  );
}
```

---

### 2. **Implementar Fetch de Vehículos**

**Archivo:** `src/app/admin/vehicles/page.tsx`

```typescript
// TODO: Reemplazar datos mock
const vehicles = []; // <- Datos dummy actualmente

// Implementa esto:
const fetchVehicles = async () => {
  const token = await window.Clerk.session.getToken();

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  return response.json();
};
```

**Funciones a implementar:**
- `handleCreateVehicle()` - Abrir modal de creación
- `handleEditVehicle(id)` - Abrir modal de edición
- `handleDeleteVehicle(id)` - Confirmar y eliminar
- `handleViewVehicle(id)` - Ver detalles

---

### 3. **Implementar Fetch de Reservas**

**Archivo:** `src/app/admin/bookings/page.tsx`

**Funciones a implementar:**
- Fetch de todas las reservas (requiere admin)
- Filtros por estado (PENDING, CONFIRMED, COMPLETED, CANCELLED)
- Editar estado de reserva
- Ver detalles completos de una reserva

**Endpoint del backend:**
```
GET /api/bookings (requiere admin token)
```

---

### 4. **Implementar Fetch de Servicios**

**Archivo:** `src/app/admin/services/page.tsx`

**Funciones a implementar:**
- Crear nuevo servicio
- Editar servicio existente
- Toggle active/inactive
- Eliminar servicio

**Endpoints del backend:**
```
POST   /api/services (admin)
PUT    /api/services/:id (admin)
DELETE /api/services/:id (admin)
```

---

### 5. **Implementar Gestión de Contactos**

**Archivo:** `src/app/admin/contacts/page.tsx`

**Funciones a implementar:**
- Fetch de todos los mensajes
- Marcar como leído
- Cambiar estado (NEW → READ → REPLIED)
- Eliminar mensaje
- Enviar respuesta por email

**Endpoints del backend:**
```
GET    /api/contacts (admin)
PATCH  /api/contacts/:id/status (admin)
DELETE /api/contacts/:id (admin)
```

---

### 6. **Crear Modales para CRUD**

Necesitas crear componentes de modal/dialog para:

**Vehículos:**
- `VehicleCreateModal.tsx` - Formulario de creación
- `VehicleEditModal.tsx` - Formulario de edición
- `VehicleDeleteConfirm.tsx` - Confirmación de eliminación

**Servicios:**
- `ServiceModal.tsx` - Crear/Editar servicio

**Reservas:**
- `BookingDetailsModal.tsx` - Ver detalles completos
- `BookingEditStatusModal.tsx` - Cambiar estado

**Contactos:**
- `ContactViewModal.tsx` - Ver mensaje completo
- `ContactReplyModal.tsx` - Responder al mensaje

---

### 7. **Implementar Dashboard Stats**

**Archivo:** `src/app/admin/dashboard/page.tsx`

```typescript
// TODO: Fetch real stats from API
const fetchDashboardStats = async () => {
  const token = await window.Clerk.session.getToken();

  // Puedes crear un endpoint específico para stats
  const response = await fetch(`${API_URL}/api/admin/stats`, {
    headers: { "Authorization": `Bearer ${token}` }
  });

  return response.json();
};
```

**Stats a calcular:**
- Total de vehículos
- Total de reservas
- Reservas activas
- Total de servicios
- Mensajes sin leer
- Revenue del mes

---

## 🛠️ Herramientas Recomendadas

### Para Modales/Dialogs
Ya tienes Radix UI instalado. Usa:
```typescript
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
```

### Para Formularios
Ya tienes react-hook-form y zod:
```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
```

### Para Obtener Token de Clerk
```typescript
import { useAuth } from "@clerk/nextjs";

const { getToken } = useAuth();
const token = await getToken();
```

---

## 📊 Ejemplo Completo: Crear Vehículo

```typescript
// 1. Crear el schema de validación
import { z } from "zod";

const vehicleSchema = z.object({
  name: z.string().min(3),
  quantityPassengers: z.number().min(1),
  quantityBaggage: z.number().min(0),
  description: z.string().min(10),
  pricePerHour: z.number().min(0),
  pricePerMile: z.number().min(0),
  images: z.array(z.string()).min(1),
});

// 2. Crear el formulario
const form = useForm({
  resolver: zodResolver(vehicleSchema),
});

// 3. Implementar el submit
const onSubmit = async (data) => {
  const token = await getToken();

  const response = await fetch(`${API_URL}/api/vehicles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    // Cerrar modal, refrescar lista, mostrar toast
    toast.success("Vehicle created successfully!");
    fetchVehicles(); // Refrescar lista
  }
};
```

---

## 🎯 Orden Sugerido de Implementación

1. **Proteger rutas de admin** (más importante)
2. **Fetch de vehículos** (lo más simple)
3. **Crear vehículo** (aprender formularios)
4. **Editar vehículo** (similar a crear)
5. **Eliminar vehículo** (aprender confirmaciones)
6. **Fetch de reservas** (más complejo)
7. **Gestionar estados de reservas**
8. **Servicios y contactos** (similar a vehículos)
9. **Dashboard stats** (requiere todos los anteriores)

---

## 🐛 Tips de Debugging

1. **Usa `console.log` generosamente** mientras aprendes
2. **Revisa la consola del navegador** para errores
3. **Usa las DevTools de Network** para ver las peticiones API
4. **Revisa los logs del backend** para errores de autorización
5. **Verifica que el token de Clerk se esté enviando** correctamente

---

## 📚 Recursos Adicionales

- **Clerk Auth:** https://clerk.com/docs
- **React Hook Form:** https://react-hook-form.com/
- **Zod Validation:** https://zod.dev/
- **Radix UI:** https://www.radix-ui.com/

---

## ✅ Checklist de Implementación

- [ ] Proteger rutas de admin
- [ ] Fetch de vehículos desde API
- [ ] Crear vehículo con formulario
- [ ] Editar vehículo
- [ ] Eliminar vehículo con confirmación
- [ ] Fetch de reservas
- [ ] Ver detalles de reserva
- [ ] Cambiar estado de reserva
- [ ] Fetch de servicios
- [ ] CRUD completo de servicios
- [ ] Fetch de contactos
- [ ] Marcar mensajes como leídos
- [ ] Responder a mensajes
- [ ] Dashboard stats reales
- [ ] Loading states
- [ ] Error handling
- [ ] Toast notifications

---

**¡Buena suerte con tu práctica! 🚀**
