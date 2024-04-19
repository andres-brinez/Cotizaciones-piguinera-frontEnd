import { ReactElement } from "react"
import { Outlet } from "react-router-dom"
import { NavigationBar } from "../components/NavigationBar"
import './style.css'

// Puede ser util para la barra de navagacion
export const Layout=():ReactElement=>{
  return (
    <>
    <NavigationBar/>
        <main>
            {/* Aquí se renderizarán los componentes */}
            <Outlet>
            </Outlet>
        </main>
    </>
    
  )
}