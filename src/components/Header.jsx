import { Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-14 bg-[#1E1B4B] text-white flex items-center px-6 border-b">
      <div className="flex-1 flex items-center gap-4">
        {/* Workspace selector */}
        <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-3xl px-4 py-1 text-sm font-medium cursor-pointer">
          <span>Worcspace 1</span>
          <span className="text-xs">▼</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white/10 text-white placeholder:text-gray-400 border border-transparent focus:border-white/30 rounded-3xl pl-11 py-2 text-sm outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Bell size={22} className="cursor-pointer hover:text-gray-300 transition-colors" />
        
        {/* User avatar */}
        <div className="w-8 h-8 bg-[#4F46E5] text-white rounded-2xl flex items-center justify-center font-semibold text-sm cursor-pointer">
          GK
        </div>
      </div>
    </header>
  );
}