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
<div className='puzzles-container'>
  <div className='puzzles'>
    <span>image</span>
    <h2>News Title</h2>
    <p>info</p>
  </div>
  <div className='puzzles'>
    <span>image</span>
    <h2>News Title</h2>
    <p>info</p>
  </div> <div className='puzzles'>
    <span>image</span>
    <h2>News Title</h2>
    <p>info</p>
  </div> <div className='puzzles'>
    <span>image</span>
    <h2>News Title</h2>
    <p>info</p>
  </div>
</div>

<footer>
  <div>
    <div>
      <a href=''><span>The New Yorker</span></a>
    </div>
    <nav>
      <p>Sections</p>
      <ul className='sections-list'>
        <li>News</li>
        <li>Books & Culture</li>
        <li>Fiction & Poetry</li>
        <li>Humor & Cartoons</li>
        <li>Magazine</li>
        <li>Crossword</li>
        <li>Video</li>
        <li>Podcasts</li>
        <li>Archive</li>
        <li>Goings On</li>

      </ul>
    </nav>
    <nav>
      <p>More</p>
      <ul className='sections-list'>
        <li>Customer Care</li>
        <li>Shop the New Yorker</li>
        <li>Buy Covers and Cartoons</li>
        <li>Conde Nast Store</li>
        <li>Digital Access</li>
        <li>Newsletters</li>
        <li>Jigsaw Puzzle</li>
        <li>RSS</li>


      </ul>
    </nav>
  </div>
  <button>Your Privacy Choices</button>
</footer>
    </>
  )
}

export default App
