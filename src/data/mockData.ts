import {
  Bell,
  Boxes,
  BriefcaseBusiness,
  ClipboardList,
  Factory,
  History,
  Home,
  LayoutDashboard,
  LogOut,
  PackageCheck,
  Settings,
  User,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type BadgeTone = "emerald" | "amber" | "blue" | "rose" | "zinc";

export type NavItem = {
  label: string;
  path: string;
  icon: LucideIcon;
};

export const businessNav: NavItem[] = [
  { label: "Dashboard", path: "/business", icon: LayoutDashboard },
  { label: "Workers", path: "/business/workers", icon: Users },
  { label: "Production Orders", path: "/business/orders", icon: ClipboardList },
  { label: "Material Tracking", path: "/business/materials", icon: PackageCheck },
  { label: "Inventory", path: "/business/inventory", icon: Boxes },
  { label: "Reports", path: "/business/reports", icon: Factory },
  { label: "Notifications", path: "/business/notifications", icon: Bell },
  { label: "Settings", path: "/business/settings", icon: Settings },
];

export const laborNav: NavItem[] = [
  { label: "Dashboard", path: "/labor", icon: LayoutDashboard },
  { label: "My Jobs", path: "/labor/jobs", icon: BriefcaseBusiness },
  { label: "Businesses", path: "/labor/businesses", icon: Factory },
  { label: "Work History", path: "/labor/history", icon: History },
  { label: "Notifications", path: "/labor/notifications", icon: Bell },
  { label: "Profile", path: "/labor/profile", icon: User },
  { label: "Settings", path: "/labor/settings", icon: Settings },
];

export const logoutItem = { label: "Logout", path: "/", icon: LogOut };
export const homeItem = { label: "Landing", path: "/", icon: Home };

export const workers = [
  { id: 1, name: "Maya Tamang", skill: "Gold filigree artisan", status: "Active", assignedOrders: 3, contact: "+977 984-210-4491" },
  { id: 2, name: "Arjun Shrestha", skill: "Silver casting", status: "Assigned", assignedOrders: 2, contact: "+977 980-141-8873" },
  { id: 3, name: "Nima Gurung", skill: "Hand polishing", status: "Available", assignedOrders: 0, contact: "+977 981-304-7756" },
  { id: 4, name: "Sara Maharjan", skill: "Stone setting", status: "Active", assignedOrders: 4, contact: "+977 986-492-1188" },
  { id: 5, name: "Kiran Rai", skill: "Leather stitching", status: "Pending", assignedOrders: 1, contact: "+977 982-560-7224" },
];

export const orders = [
  { id: "PO-1048", product: "22K bridal necklace set", worker: "Maya Tamang", status: "In Progress", deadline: "Jul 14, 2026", priority: "High", progress: 64 },
  { id: "PO-1049", product: "Silver temple earrings", worker: "Arjun Shrestha", status: "Pending", deadline: "Jul 18, 2026", priority: "Medium", progress: 18 },
  { id: "PO-1050", product: "Ruby ring batch", worker: "Sara Maharjan", status: "Quality Check", deadline: "Jul 11, 2026", priority: "High", progress: 86 },
  { id: "PO-1051", product: "Leather tool pouches", worker: "Kiran Rai", status: "Queued", deadline: "Jul 22, 2026", priority: "Low", progress: 8 },
];

export const materials = [
  { name: "22K gold grain", quantity: "820 g", worker: "Maya Tamang", status: "Allocated" },
  { name: "Sterling silver sheet", quantity: "14.5 kg", worker: "Arjun Shrestha", status: "In Use" },
  { name: "Ruby calibrated stones", quantity: "96 pcs", worker: "Sara Maharjan", status: "Issued" },
  { name: "Vegetable-tanned leather", quantity: "48 sq ft", worker: "Kiran Rai", status: "Reserved" },
];

export const inventory = [
  { category: "Raw Materials", item: "22K gold grain", available: "3.4 kg", reserved: "820 g", status: "Healthy" },
  { category: "Raw Materials", item: "Sterling silver sheet", available: "28 kg", reserved: "14.5 kg", status: "Review" },
  { category: "Raw Materials", item: "Gemstone packets", available: "420 pcs", reserved: "96 pcs", status: "Healthy" },
  { category: "Finished Products", item: "Completed jewelry sets", available: "37 sets", reserved: "12 sets", status: "Ready" },
];

export const businessReports = [
  { title: "Worker Productivity", value: "82%", detail: "Average order completion across active workers" },
  { title: "Completed Orders", value: "146", detail: "Finished and quality checked this quarter" },
  { title: "Pending Orders", value: "21", detail: "Awaiting worker acceptance or material issue" },
  { title: "Material Usage", value: "71%", detail: "Allocated raw material currently in production" },
];

export const laborJobs = [
  { id: "JOB-221", product: "Bridal necklace detailing", business: "Aarunya Jewels", deadline: "Jul 14, 2026", status: "Active", progress: 64 },
  { id: "JOB-222", product: "Temple earring mold cleanup", business: "Heritage Silverworks", deadline: "Jul 18, 2026", status: "Request", progress: 0 },
  { id: "JOB-223", product: "Ruby ring stone setting", business: "Lotus Craft House", deadline: "Jul 11, 2026", status: "Review", progress: 86 },
];

export const businesses = [
  { name: "Aarunya Jewels", industry: "Gold jewelry production", activeJobs: 2 },
  { name: "Heritage Silverworks", industry: "Silver craft manufacturing", activeJobs: 1 },
  { name: "Lotus Craft House", industry: "Gemstone accessories", activeJobs: 1 },
  { name: "Everest Leather Studio", industry: "Leather goods", activeJobs: 0 },
];

export const workHistory = [
  { product: "Filigree bracelet batch", business: "Aarunya Jewels", completed: "Jun 27, 2026", outcome: "Accepted" },
  { product: "Silver pendant finishing", business: "Heritage Silverworks", completed: "Jun 20, 2026", outcome: "Accepted" },
  { product: "Gemstone pendant setting", business: "Lotus Craft House", completed: "Jun 08, 2026", outcome: "Accepted" },
  { product: "Custom anklet engraving", business: "Aarunya Jewels", completed: "May 24, 2026", outcome: "Accepted" },
];

export const notifications = [
  { title: "Material issued", message: "820 g of 22K gold grain assigned to PO-1048.", time: "18 min ago" },
  { title: "Progress updated", message: "Ruby ring batch moved to quality check.", time: "1 hr ago" },
  { title: "Worker request", message: "Nima Gurung is available for a new polishing order.", time: "3 hrs ago" },
];

export const laborNotifications = [
  { title: "New request", message: "Heritage Silverworks requested mold cleanup by Jul 18.", time: "24 min ago" },
  { title: "Quality note", message: "Lotus Craft House added comments to JOB-223.", time: "2 hrs ago" },
  { title: "Material ready", message: "Aarunya Jewels marked gold grain ready for pickup.", time: "Yesterday" },
];

export const toneForStatus = (status: string): BadgeTone => {
  const value = status.toLowerCase();
  if (value.includes("active") || value.includes("accepted") || value.includes("ready") || value.includes("healthy")) return "emerald";
  if (value.includes("pending") || value.includes("queued") || value.includes("request") || value.includes("review")) return "amber";
  if (value.includes("progress") || value.includes("allocated") || value.includes("issued") || value.includes("use")) return "blue";
  if (value.includes("high")) return "rose";
  return "zinc";
};
