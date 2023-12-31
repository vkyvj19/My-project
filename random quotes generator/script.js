async function getRandomQuote() {
    const quoteElement = document.getElementById('quote');
    
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      console.log(data);
  
      const quote = `${data.content} - ${data.author}`;
      quoteElement.textContent = quote;
    } catch (error) {
      console.error('Error fetching quote:', error.message);
      quoteElement.textContent = 'Failed to fetch a quote. Please try again later.';
    }
  }
  
  // Initial quote display
  getRandomQuote();
  