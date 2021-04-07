export default class JSONDatabase
{
    //Constructor
    constructor(filePath, load = true){
      this.data = { usuarios: {  },  pacientes: {  },  acessos: {  } };
      this.filePath = filePath;
      if(load){
        this.loadDataFromFile();
      }
    }

    //Loader -> Lê arquivo de JSON
    loadDataFromFile(){
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", this.filePath, false);
      xmlhttp.send();
      if (xmlhttp.status==200) {
        this.data = JSON.parse(xmlhttp.responseText);
        console.log("JSONDatabase -> Database loaded from '"+this.filePath+"'");
      }else{
        console.log("JSONDatabase -> Failed to load database from '"+this.filePath+"'");
      }
    }

    //Find -> Retorna todos os registros de uma tabela
    findObject(tableName, condition){
      var found = this.findAllObject(tableName, condition);
      return found[Object.keys(found)[0]];
    }

    findAllObject(tableName, condition = function(){return true;}){
      return Object.fromEntries(this.findArray(tableName, condition));
    }

    findArray(tableName, condition = function(){return true;}){
      var found = Object.entries(this.data[tableName]).filter(condition);
      return found;
    }

    //Save -> Salva os estado da base no arquivo
    save(){
      var dataJSON = JSON.stringify(this.data);
      
    }
  }