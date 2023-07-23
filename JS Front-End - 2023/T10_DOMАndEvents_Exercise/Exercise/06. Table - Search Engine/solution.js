function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchedContent = document.querySelector('#searchField').value;
      const tableData = Array.from(document.querySelectorAll('tbody td'));
      const oldResult = Array.from(document.querySelectorAll('tbody tr.select'));

      oldResult.forEach(row => {
         row.classList.remove('select');
      });

      tableData.forEach(dataRow => {
         if (dataRow.textContent.includes(searchedContent)) {
            dataRow.parentElement.classList.add("select");
         }
      });
   }
}