'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const menuMap: Record<string, string> = {
  '/': 'Beranda',
  '/dashboard': 'Dashboard',
  '/kelas': 'Kelas',
};

export default function Topbar() {
  const pathname = usePathname();
  const router = useRouter();

  let title = menuMap[pathname] ?? 'SMK Negeri 1 Malang';
  if (pathname.startsWith('/kelas/')) {
    title = 'Detail Kelas';
  }

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-40 flex h-14 shrink-0 items-center gap-3 border-b border-gray-200 bg-white px-4">
      <SidebarTrigger />
      <h1 className="text-base font-semibold text-gray-800">{title}</h1>

      <div className="ml-auto flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium leading-tight text-gray-800">Admin</p>
          <p className="text-xs leading-tight text-gray-500">Administrator</p>
        </div>
        <Avatar className="size-9">
          <AvatarFallback className="bg-[#1d6bf3] text-white">A</AvatarFallback>
        </Avatar>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={handleLogout}
          title="Logout"
        >
          <LogOut className="text-gray-500" />
          <span className="sr-only">Logout</span>
        </Button>
      </div>
    </header>
  );
}
