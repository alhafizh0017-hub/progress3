'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutDashboard, School } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from '@/components/ui/sidebar';

const items = [
  { title: 'Beranda', url: '/', icon: Home },
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Kelas', url: '/kelas', icon: School },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (url: string) =>
    url === '/' ? pathname === '/' : pathname === url || pathname.startsWith(`${url}/`);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#1d6bf3] text-white">
            <School className="size-4" />
          </div>
          <div className="overflow-hidden group-data-[collapsible=icon]:hidden">
            <p className="truncate text-sm font-semibold text-gray-800">
              SMK Negeri 1 Malang
            </p>
            <p className="truncate text-xs text-gray-500">e-Learning</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter>
        <div className="flex items-center gap-2 px-2 py-1.5 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#1d6bf3] text-sm font-medium text-white">
            A
          </div>
          <div className="overflow-hidden group-data-[collapsible=icon]:hidden">
            <p className="truncate text-sm font-medium text-gray-800">Admin</p>
            <p className="truncate text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
