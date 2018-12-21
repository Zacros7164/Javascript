$(document).ready(()=>{
    // Once the DOM is done loading, the js will begin its thing
    $('.stock-form').submit((event)=>{
        event.preventDefault();
        // console.log(event);


        // .val() is jQuery, .value is native JS
        const symbol = $('#symbol').val();
        $('#symbol').val('')
        // console.log(symbol)
        // how can we make an array out of a string based on where the , are?
        const symbols = symbol.split(",")
        symbols.forEach((s)=>{
            s = s.trim();
            


            // our endpoint
            // an endpoint is a web accessible URL, that responds with data
            const url=`https://api.iextrading.com/1.0/stock/${s}/quote`
            // getJSON method takes 2 args 
            // 1. where to get the JSON
            // 2. function to run when I'm back
            $.getJSON(url, (dataReturned)=>{

                let changeClass = ''

                if(dataReturned.change < 0){
                    changeClass = 'bg-danger'
                }else{
                    changeClass = 'bg-success'
                }
                

                // console.log(theDataJSFoundIfAny)
                $('#stock-body').append(`
                <tr>
                    <td>${dataReturned.symbol}</td>
                    <td>${dataReturned.companyName}</td>
                    <td>${dataReturned.high}</td>
                    <td>${dataReturned.low}</td>
                    <td class=${changeClass}>${dataReturned.change}</td>
                </tr>
                `) // end append

                
            }) // end getJSON
            
        }); // end forEach
        $('#stock-table').DataTable();
    }) //end submit 

    
})