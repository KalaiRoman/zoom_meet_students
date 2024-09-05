import React from 'react'
import RoutingPaths from './../routing/RoutingPaths';
function Layout({children}) {
  const pathName=window.location.pathname;
  return (
    <div className='main-sidebar-section'>
        <section className='header-section'>
            <header>
                header
            </header>
        </section>
        <section className='main-body-section'>
            <main>
              <div className='main-inside-body-section' >
                <div className='left-body-section'>
                  {RoutingPaths.slice(1)?.map((item,index)=>{
                    return(
                      <div className={pathName==item?.path?"active-button":'button-sidebar'} onClick={()=>window.location.assign(item?.path)}>
{item?.name}
                      </div>
                    )
                  })}
                </div>
                <div className='right-body-section'>
                {children}
                </div>
              </div>
            </main>
        </section>
        <section className='footer-section'>
            <footer>
Footer
            </footer>
        </section>
    </div>
  )
}

export default Layout