import { motion } from "motion/react";
import { Search, Bell, Settings, Package, BookOpen, ShoppingCart, RefreshCw, Zap, CreditCard, MessageSquare, Gift, LayoutDashboard } from "lucide-react";

export default function DashboardMockup() {
  return (
    <div className="w-full h-full rounded-2xl bg-white border border-black/10 shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col pointer-events-auto">
      {/* Mac OS Window Header */}
      <div className="h-10 bg-[#323233] flex items-center px-4 relative flex-shrink-0">
        <div className="flex gap-2 relative z-10">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="absolute inset-x-0 flex justify-center">
          <div className="bg-[#424243] text-[#AEAEAE] text-xs px-24 py-1 rounded-md font-medium tracking-wide">
            cafe.gradient365.com/dashboard
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden bg-[#FAFAFA]">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-[#EEEEEE] flex flex-col">
          {/* Logo */}
          <div className="p-5 border-b border-[#EEEEEE] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center font-bold text-xl">
              G
            </div>
            <div>
              <div className="font-bold text-ink leading-tight">Blue Mug Cafe</div>
              <div className="text-xs text-soft-ink">Cafe Portal</div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto padding-y-4 py-4 flex flex-col gap-6">
            <div>
              <div className="px-6 text-[10px] font-bold text-soft-ink uppercase tracking-wider mb-2">Today</div>
              <div className="px-3">
                <div className="flex items-center gap-3 px-3 py-2 bg-brand-primary/5 text-brand-primary rounded-lg relative cursor-pointer font-medium text-sm">
                  <LayoutDashboard size={18} className="text-ink/70" />
                  <span>Overview</span>
                  <div className="absolute right-0 top-1 bottom-1 w-1 bg-brand-primary rounded-l-full"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="px-6 text-[10px] font-bold text-soft-ink uppercase tracking-wider mb-2">Operations</div>
              <div className="px-3 flex flex-col gap-1">
                <NavItem icon={<Package size={18} />} label="Orders" />
                <NavItem icon={<BookOpen size={18} />} label="Catalogue" />
                <NavItem icon={<ShoppingCart size={18} />} label="Cart" />
                <NavItem icon={<RefreshCw size={18} className="text-blue-500" />} label="Pre-Orders" />
                <NavItem icon={<Zap size={18} className="text-brand-primary" />} label="Urgent Search" />
              </div>
            </div>

            <div>
              <div className="px-6 text-[10px] font-bold text-soft-ink uppercase tracking-wider mb-2">Finance & Growth</div>
              <div className="px-3 flex flex-col gap-1">
                <NavItem icon={<CreditCard size={18} className="text-blue-400" />} label="Billing" />
                <NavItem icon={<MessageSquare size={18} className="text-purple-400" />} label="Negotiations" />
                <NavItem icon={<Gift size={18} className="text-red-500" />} label="Trials" />
              </div>
            </div>
          </div>

          <div className="p-5 border-t border-[#EEEEEE] flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold text-sm">
              P
            </div>
            <div>
              <div className="text-sm font-medium text-ink leading-tight">Priya M.</div>
              <div className="text-xs text-soft-ink">Owner</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {/* Top Nav */}
          <div className="h-16 border-b border-[#EEEEEE] flex items-center justify-between px-8 bg-white shrink-0">
            <div className="relative w-96">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search products, orders..." className="w-full pl-9 pr-4 py-2 bg-[#F5F5F5] border border-transparent focus:border-brand-primary/30 focus:bg-white focus:outline-none rounded-lg text-sm transition-colors" />
            </div>
            <div className="flex items-center gap-4">
              <button className="w-8 h-8 rounded-full bg-brand-primary-light/10 text-brand-primary flex items-center justify-center relative hover:bg-brand-primary/20 transition-colors">
                <Bell size={16} />
                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-primary rounded-full"></span>
              </button>
              <button className="w-8 h-8 rounded-full bg-[#F3F0FF] text-purple-600 flex items-center justify-center hover:bg-purple-100 transition-colors">
                <Settings size={16} />
              </button>
              <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold text-sm cursor-pointer hover:opacity-90">
                P
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 overflow-y-auto p-8">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-ink mb-8"
            >
              Good morning, Priya 👋
            </motion.h1>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <MetricCard 
                title="THIS MONTH SPEND" 
                value="₹1.24L" 
                subtitle="↑ 8% vs last month" 
                subtitleColor="text-brand-primary"
                delay={0.1}
              />
              <MetricCard 
                title="ACTIVE ORDERS" 
                value="7" 
                subtitle="3 dispatched" 
                subtitleColor="text-brand-primary"
                delay={0.2}
              />
              <MetricCard 
                title="LOW STOCK ITEMS" 
                value="4" 
                subtitle="⚠ Reorder needed" 
                subtitleColor="text-brand-primary"
                delay={0.3}
              />
              <MetricCard 
                title="PENDING INVOICES" 
                value="₹18,400" 
                subtitle="2 overdue" 
                subtitleColor="text-red-500"
                delay={0.4}
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white border border-[#EEEEEE] rounded-xl overflow-hidden shadow-sm"
            >
              <div className="px-6 py-4 border-b border-[#EEEEEE]">
                <h3 className="font-bold text-ink">Recent Activity</h3>
              </div>
              <div className="flex flex-col">
                <ActivityRow 
                  color="bg-brand-primary" 
                  content={<><strong>ORD-2026-00421</strong> dispatched by Mumbai Dairy Co.</>} 
                  time="12m ago" 
                />
                <ActivityRow 
                  color="bg-brand-primary" 
                  content={<>Counter-offer received on <strong>Arabica Beans 1kg</strong></>} 
                  time="1h ago" 
                />
                <ActivityRow 
                  color="bg-blue-500" 
                  content={<>Trial kit from <strong>Blue Tokai Coffee</strong> delivered</>} 
                  time="3h ago" 
                />
                <ActivityRow 
                  color="bg-gray-400" 
                  content={<><strong>INV-0089</strong> due in 3 days — ₹7,200</>} 
                  time="Today" 
                />
                <ActivityRow 
                  color="bg-brand-primary" 
                  content={<>Pre-order for <strong>Full Cream Milk 10L</strong> placed automatically</>} 
                  time="Yesterday" 
                  isLast
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 text-soft-ink hover:text-ink hover:bg-[#F5F5F5] rounded-lg cursor-pointer transition-colors text-sm font-medium">
      <div className="text-soft-ink opacity-70">{icon}</div>
      <span>{label}</span>
    </div>
  );
}

function MetricCard({ title, value, subtitle, subtitleColor, delay }: { title: string, value: string, subtitle: string, subtitleColor: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white border border-[#EEEEEE] p-5 rounded-xl shadow-sm hover:shadow-md transition-all group"
    >
      <div className="text-[10px] font-bold text-soft-ink uppercase tracking-wider mb-2">{title}</div>
      <div className="text-3xl font-bold text-ink mb-3 tracking-tight group-hover:text-brand-primary transition-colors">{value}</div>
      <div className={`text-xs font-semibold ${subtitleColor}`}>{subtitle}</div>
    </motion.div>
  );
}

function ActivityRow({ color, content, time, isLast = false }: { color: string, content: React.ReactNode, time: string, isLast?: boolean }) {
  return (
    <div className={`px-6 py-4 flex items-center justify-between hover:bg-[#FAFAFA] transition-colors cursor-pointer ${!isLast ? 'border-b border-[#EEEEEE]' : ''}`}>
      <div className="flex items-center gap-4">
        <div className={`w-2.5 h-2.5 rounded-full ${color}`}></div>
        <span className="text-sm text-soft-ink">{content}</span>
      </div>
      <span className="text-xs text-soft-ink">{time}</span>
    </div>
  );
}
