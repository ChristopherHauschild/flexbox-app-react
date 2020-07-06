import React from "react"

const Footer = () => {
  return (
    <nav className="flex justify-center py-3" style={{ backgroundColor: '#20232a' }}>
      <div className='container flex justify-center px-8 md:px-32'>
        <p className='text-white md:text-lg py-1'>
          Desenvolvido com
          <i className='fa fa-heart' style={styles.icon}></i>
          por Christopher
        </p>
      </div>
    </nav>
  )
}

export default Footer

const styles = {
  icon: {
    color: 'red',
    margin: '0px 8px'
  }
}