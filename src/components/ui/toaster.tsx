// import { useToast } from "@/hooks/use-toast"
// import {
//   Toast,
//   ToastClose,
//   ToastDescription,
//   ToastProvider,
//   ToastTitle,
//   ToastViewport,
// } from "@/components/ui/toast"

// export function Toaster() {
//   const { toasts } = useToast()

//   return (
//     <ToastProvider>
//       {toasts.map(function ({ id, title, description, action, ...props }) {
//         return (
//           <Toast key={id} {...props}>
//             <div className="grid gap-1">
//               {title && <ToastTitle>{title}</ToastTitle>}
//               {description && (
//                 <ToastDescription>{description}</ToastDescription>
//               )}
//             </div>
//             {action}
//             <ToastClose />
//           </Toast>
//         )
//       })}
//       <ToastViewport />
//     </ToastProvider>
//   )
// }



// src/components/ui/toaster.tsx
import { useToast } from "@/hooks/use-toast"; // Import the useToast hook
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider as ShadcnToastProvider, // Rename to avoid conflict with our context
  ToastTitle,
  ToastViewport,
} from "./toast"; // Assuming Shadcn's toast components are in a 'toast.tsx' file in the same ui folder

export function Toaster() {
  const { toasts } = useToast(); // Get the toasts from the global state

  return (
    // ShadcnToastProvider is typically used to manage the ToastViewport
    <ShadcnToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ShadcnToastProvider>
  );
}
