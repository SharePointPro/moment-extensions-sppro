# moment-extensions-sppro
Helpful extensions for momentjs

# installation
```
npm install moment-extensions-sppro
  
...  
 
import moment from 'moment-extensions-sppro';
```

# methods  
*compareDate* - Compares date without time  
Usage:  
```
let jan15noon = moment("Wed Jan 15 2020 12:00:00");
let jan15morning = moment("Wed Jan 15 2020 09:00:00");
jan15noon.compareDate(jan15morning);  //true
```
