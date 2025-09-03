import AdminHeader from "./Header"
import AdminSidebar from "./Sidebar"



function AdminLayout() {
    return (
      <>
        <div className="flex min-h-screen w-full">
          <AdminSidebar />
          <div className="flex flex-1 flex-col">
                    <AdminHeader />
                    <main>
                        <Outlet/>
                    </main>
                </div>
                
        </div>
      </>
    );
}