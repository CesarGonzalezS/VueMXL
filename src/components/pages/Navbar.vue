<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="justify-content-center">
            <b-navbar-brand :to="{ name: 'inicio' }" class="d-flex align-items-center">
                <img src="@/assets/img/logo.jpg" alt="Logo" class="logo-img" />
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="d-flex justify-content-center align-items-center">
                    <b-nav-item :to="{ name: 'inicio' }" class="nav-item">
                        Inicio
                    </b-nav-item>
                    <b-nav-item :to="{ name: 'promociones' }" class="nav-item">
                        Promociones
                    </b-nav-item>
                    <b-nav-item :to="{ name: 'contacto' }" class="nav-item">
                        Contacto
                    </b-nav-item>


                </b-navbar-nav>

         
            </b-collapse>
            <b-button variant="outline-primary">
                <b-icon icon="person-fill"></b-icon> Account
            </b-button>
        </b-navbar>
    </div>
</template>
  
<script>

</script>
<style>
.logo-img {
    width: 140px;
    /* Ajusta el tamaño según tus necesidades */
    height: auto;
    margin-right: 100px;
    box-shadow: 0 20px 10px rgba(0, 0, 0, 0.1); /* Ajusta los valores según tus preferencias */
    transition: box-shadow 0.3s ease, transform 0.3s ease; /* Añade transform a la transición */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Cambia la sombra cuando el mouse pasa sobre el elemento */
    transform: translateY(-4px); /* Hace que el elemento se eleve al pasar el mouse */

}

.nav-item {
    /* ... (otras propiedades) */
    box-shadow: 0 20px 10px rgba(0, 0, 0, 0.1); /* Ajusta los valores según tus preferencias */
    transition: box-shadow 0.3s ease, transform 0.3s ease; /* Añade transform a la transición */
}

.nav-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Cambia la sombra cuando el mouse pasa sobre el elemento */
    transform: translateY(-4px); /* Hace que el elemento se eleve al pasar el mouse */

}


.nav-item {
    font-size: 30px;
    position: relative;
    padding-bottom: 5px;
    /* Ajusta el espaciado debajo del texto según tus necesidades */
    margin-right: 130px;
    /* Ajusta el margen horizontal entre los elementos */
}



.nav-item::before,
.nav-item::after {

    
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    /* Grosor de la línea */
    background-color: #000000;
    /* Color de la línea */
    left: 0;
}

.nav-item::before {
    top: 0;
}

.nav-item::after {
    bottom: 0;
}

/* Estilos adicionales para centrar y mejorar la estética del navbar */
.b-navbar-brand {
    font-size: 10px;
    /* Ajusta el tamaño del texto según tus necesidades */
    margin-right: 20px;
    /* Ajusta el margen a la derecha según tus necesidades */
}

/* Alineación vertical y margen a la izquierda para las palabras del navbar */
.align-items-center {
    margin-top: 10px;
    /* Ajusta el margen superior según tus necesidades */
}



.navbar {
    background-color: #76b5c5;
}</style>
  