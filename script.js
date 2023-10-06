function processKeywords() {
    const keywordsInput = document.getElementById("keywords");
    const keywordsOutput = document.getElementById("output");
  
    // Get the input value
    const inputText = keywordsInput.value;
    
    // Split the input into lines
    const inputLines = inputText.split('\n');
  
    // Initialize an array to store the sorted keywords
    const sortedKeywords = [];
  
    // Process each line
    inputLines.forEach(line => {
      // Split the line by at least two spaces
      const lineKeywords = line.split(/\s{2,}/);
  
      // Filter out keywords with less than 2 spaces
      const validKeywords = lineKeywords.filter(keyword => keyword.split(' ').length >= 3);
  
      // Sort the valid keywords alphabetically and add them to the result array
      sortedKeywords.push(...validKeywords.sort());
    });
  
    // Display the sorted keywords line by line
    keywordsOutput.innerHTML = "<strong>Sorted Keywords:</strong><br>" + sortedKeywords.join("<br>");
  
    // Store the sorted keywords in a global variable for copying and downloading
    window.sortedKeywords = sortedKeywords;
  }
  
  function copyKeywords() {
    // Get the sorted keywords from the global variable
    const sortedKeywords = window.sortedKeywords;
  
    // Create a temporary textarea to copy the sorted keywords
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = sortedKeywords.join("\n");
    document.body.appendChild(tempTextarea);
    
    // Select and copy the text
    tempTextarea.select();
    document.execCommand("copy");
    
    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);
    
    // Show a message to indicate that the keywords are copied
    alert("Keywords copied to clipboard!");
  }
  
  function downloadCSV() {
    // Get the sorted keywords from the global variable
    const sortedKeywords = window.sortedKeywords;
  
    // Create a CSV content string
    const csvContent = "Keywords\n" + sortedKeywords.join("\n");
    
    // Create a Blob containing the CSV data
    const blob = new Blob([csvContent], { type: "text/csv" });
    
    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = "keywords.csv";
    
    // Trigger the download
    downloadLink.click();
  }
  