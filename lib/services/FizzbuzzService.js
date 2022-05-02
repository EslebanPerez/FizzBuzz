class FizzbuzzService {
    static applyValidationInExplorer(explorer){
      if ( explorer.score % 3 == 0 ){
           explorer.trick = 'FIZZ'   
      } 
      else{ 
          explorer.trick = explorer.score
        }
    return explorer
    }
}

module.exports = FizzbuzzService