import './App.css'

function App() {

  return (
    <>
      <header>
        <div className='nav-container'>
          <div className="nav-middle">Logo</div>
          <div className="nav-right">subscribe</div>
        </div>
        <nav>
          <ul className='categories'>
            <li>News</li>
            <li>Books & Culture</li>
            <li>Fiction & Poetry</li>
            <li>Humor & Cartoons</li>
            <li>Magazine</li>
            <li>Puzzles & Games</li>
            <li>Video</li>
            <li>Podcasts</li>
            <li>Archive</li>
            <li>Goings On</li>
            <li>Shop</li>


          </ul>
        </nav>
      </header>
      <div className='banner-container'>
        <section>
          <span>Support The New Yorker's Award-winning journalism.</span> 
        </section>
      </div>

        <div className='news-container-container'>
          <div className='news-container'>
        <div >
          <span>image</span>
          <h2>News Title</h2>
          <p>News info</p>
        <div>
        <span>image</span>
        <h2>News Title</h2>
        <p>News info</p>
    </div>      
        </div>
  
  </div>


  <div className='news-container'>
        <div>
        <span>image</span>
        <h2>News Title</h2>
        <p>News info</p>


</div>
        <div>
        <span>image</span>
        <h2>News Title</h2>
        <p>News info</p>


</div>
</div>
</div>
<div className='pandg'>
<h2>Puzzles & Games</h2>
</div>
    </>
  )
}

export default App
