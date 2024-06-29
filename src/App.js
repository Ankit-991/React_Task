import React,{ useEffect, useState } from 'react';
import PostCard from './PostCard';
import PageNavigation from './PageNavigation';
// import Shimmer from './Shimmer';

function App() {
 
     const [cardData,setCardData] = useState([]);
     const [currentPage,setCurrentPage] = useState(1);
     const [cardsPerPage]=useState(6);
     const[loading,setLoading] = useState(true);

    //Logic for Fetching the Data 

    useEffect(()=>{
        fetchData();
        setTimeout(()=>{
            setLoading(false);
           
        },1500)   
    },[]);

   

    const fetchData = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);
            setCardData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    //Logic for pagination
 
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstPage = indexOfLastCard - cardsPerPage;
    const currentCards = cardData.slice(indexOfFirstPage , indexOfLastCard)
    
   const handlePageChange = (pageNumber) => {
      
        setCurrentPage(pageNumber);
     
   }


   const handleRemove = (id) => {
    const updatedData = cardData.filter(card => card.id !== id);
    setCardData(updatedData);

    // If the current page is empty after removing, shift cards from next page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = updatedData.slice(indexOfFirstCard, indexOfLastCard);

    if (currentCards.length < cardsPerPage && currentPage < Math.ceil(updatedData.length / cardsPerPage)) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

    return(

        
            // <div className="p-4"> {/* Example Tailwind CSS padding */}
            //   <h1 className="text-3xl font-bold text-center mb-4">React-based web application to show a list of posts.</h1> {/* Example Tailwind CSS text styling */}
            //   {loading ? (
            //     <h1>Loading.......</h1>
            //   ) : (
            //     <>
            //       <div className="container mx-auto">
            //         {currentCards.map((card) => (
            //           <PostCard key={card.id} post={card} handleRemove={handleRemove} />
            //         ))}
            //       </div>
            //       <div className="flex justify-center mt-4"> {/* Example Tailwind CSS flexbox and margin styling */}
            //         <PageNavigation
            //           center
            //           totalCards={cardData.length}
            //           cardsPerPage={cardsPerPage}
            //           onPageChange={handlePageChange}
            //         />
            //       </div>
            //     </>
            //   )}
            // </div>
          
          
        <div >
            <h1 className='heading'>React-based web application to show a list of posts.</h1>
    {loading ? (
          <h1>Loading.......</h1>
      ) : (
        <>
          <div className="container">
            {currentCards.map((card) => (
              <PostCard key={card.id} post={card} handleRemove={handleRemove} />
            ))}
          </div>
          <div className='pagination-container'>
            <PageNavigation center
              totalCards={cardData.length}
              cardsPerPage={cardsPerPage}
              onPageChange={handlePageChange}
            />
          </div>
          
        </>
      )}
        </div>
      
);  
        
   
}

export default App;