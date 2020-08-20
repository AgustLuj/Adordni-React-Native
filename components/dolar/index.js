const pagina = 'https://adordni.herokuapp.com/dolar';

class dolar{
    async getData(fn){
        const querry = await fetch(pagina, {
            method: 'get',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          });;
        
        const data = await querry.json();
        fn(data);
    }
}
export default new dolar;