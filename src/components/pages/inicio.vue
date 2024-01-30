<template>
  <div>
    
    <div class="image-container">
      <div class="text-overlay">
        <p id="titulo">En México Lindo Tours, nos enorgullece ofrecer itinerarios cuidadosamente diseñados para brindarte momentos únicos y auténticos. Desde las playas paradisíacas hasta los sitios arqueológicos llenos de historia, nuestro compromiso es llevarte a explorar los tesoros que México tiene para ofrecer.</p>
      </div>
      <img
        src="/src/assets/img/im4.jpg"
        alt="Image"
        class="image"
      />
     
    </div>

    <div class="card-container">
      <b-card no-body class="overflow-hidden" style="max-width: 1230px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="/src/assets/img/img3.jpg" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Precios Accesibles">
              <b-card-text>
                En México Lindo Tours, creemos que viajar no debería ser un lujo inalcanzable. Ofrecemos precios accesibles para que las familias puedan disfrutar de escapadas increíbles sin comprometer la calidad del viaje.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <div>
  <div>
    <h4>Top and Bottom</h4>
    <b-card-group deck>
      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>

      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-4">
    <h4>Left and Right (or Start and End)</h4>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>

    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
  </div>
</div>

  </div>

  
</template>

<style>
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.image {
  padding: 10px;
  width: 850px;
  height: 500px;
  text-shadow: 0px 0px 2px #000;
  margin: auto;
  border-radius: 15px;
}

.text-overlay {
  position: left;
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.703);
  border-radius: 1px;
  width: 50%;
  left: 15%;
}

.titulo{
  font-size: 60px;
}

.card-container {
font-size: 30px;
border-radius: 20px;
right: 20px;
padding: 20px;

}



</style>
