import NrityaSVG from '../components/NrityaSVG';
const NotFound = () => {
  return (
    <div style={{ minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', marginLeft:"5%" }}>
        
            <NrityaSVG text={'Wrong URL 404!'} x={"2"} y={"10"} fontSize={"10px"}/>
            
         
      </div>
  )
}

export default NotFound