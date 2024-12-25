
import { useState } from 'react'
import { X, Plus, Minus } from 'lucide-react'

export default function MobileNav({ isOpen, toggleDropdown }) {
  const [expandedItems, setExpandedItems] = useState([])

  const menuItems = [
    { id: 'diy', label: 'DIY Project Kit', hasSubmenu: true },
    { id: 'multirotor', label: 'Multirotor', hasSubmenu: false },
    { id: 'ebike', label: 'E-Bike', hasSubmenu: false },
    { id: 'spare', label: 'Robot Spare Parts', hasSubmenu: false },
    { id: 'dev', label: 'Development Board and Accessories', hasSubmenu: true },
    { id: 'motor', label: 'Motor and Driver', hasSubmenu: true },
    { id: 'electronic', label: 'Electronic Components', hasSubmenu: true },
    { id: 'printer', label: '3D Printer and Accessories', hasSubmenu: true },
    { id: 'batteries', label: 'Batteries and Chargers', hasSubmenu: true },
    { id: 'tools', label: 'Tools and Accessories', hasSubmenu: true },
    { id: 'heat', label: 'Heat Shrink', hasSubmenu: false },
    { id: 'mechanical', label: 'Mechanical', hasSubmenu: true },
    { id: 'smart', label: 'Smart Home', hasSubmenu: false },
    { id: 'other', label: 'Other', hasSubmenu: false },
  ]

  const toggleExpand = (itemId) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  return (
    <>
     
      {isOpen && (
        <div
        onClick={toggleDropdown}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 30
          }}
        />
      )}

      
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: isOpen ? 0 : '-100%',
          width: '300px',
          height: '100%',
          background: 'white',
          transition: 'left 0.3s ease',
          zIndex: 40,
          overflowY: 'auto'
        }}
      >
       
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            borderBottom: '1px solid #eee'
          }}
        >
          <span style={{ fontWeight: 'bold',fontSize: "1.5rem" }}>MENU</span>
          <button
             onClick={toggleDropdown}
            style={{
              backgroundColor: 'black',
              border: 'none',
              padding: '5px',
              cursor: 'pointer'
            }}
          >
            <X size={24} />
          </button>
        </div>

        
        <div style={{ padding: '10px 0' }}>
          {menuItems.map(item => (
            <div key={item.id}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px 20px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #eee'
                }}
                onClick={() => item.hasSubmenu && toggleExpand(item.id)}
              >
                <span>{item.label}</span>
                {item.hasSubmenu && (
                  expandedItems.includes(item.id) ? 
                    <Minus size={20} /> : 
                    <Plus size={20} />
                )}
              </div>
              {item.hasSubmenu && expandedItems.includes(item.id) && (
                <div style={{ 
                  padding: '10px 20px',
                  background: '#f5f5f5'
                }}>
                  <div style={{ padding: '8px 0' }}>Submenu Item 1</div>
                  <div style={{ padding: '8px 0' }}>Submenu Item 2</div>
                  <div style={{ padding: '8px 0' }}>Submenu Item 3</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  )
}


