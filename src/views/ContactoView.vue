<template>
  
    <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">FORMULARIO CONTÁCTENOS</h2>
				</div>
			</div>
			<div class="row no-gutters " >
				<div class="col-md-7" >
					<div class="contact-wrap w-100 p-md-5 p-4" >
						<h3 class="mb-4">Contáctenos</h3>
						<div id="form-message-warning" class="mb-4"></div>
						<div id="form-message-success" class="mb-4">
							¡Su mensaje fue enviado, gracias!
						</div>
						<form  ref="form" @submit.prevent="sendEmail">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label class="label" for="name">Nombre Completo</label>
										<input   id="nombre"   type="text" class="form-control" name="name" 
											placeholder="Nombre" required>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="label" for="email">Correo Electrónico</label>
										<input type="email" class="form-control" name="email" id="email"
											placeholder="Correo Electrónico" required>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<label class="label" for="subject">Asunto</label>
										<input type="text" class="form-control" name="subject" id="subject"
											placeholder="Asunto" required>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<label class="label" for="#">Mensaje</label>
										<textarea name="message" class="form-control" id="message" cols="30" rows="4"
											placeholder="Mensaje" required></textarea>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<input type="submit" value="Enviar" class="btn btn-primary">
										<div class="submitting"></div>
									</div>
								</div>
							</div>
						</form>
					</div>
					</div>
				<div class="col-md-5 d-flex align-items-stretch">
					<!--<div class="info-wrap w-100 p-5 img" style="background-image: url(../assets/adicionales/images/pensilvania.jpg);">
					-->
					<img style="width:500px;height: 575px;" src="https://thumbs.dreamstime.com/b/imagen-vertical-del-r%C3%ADo-reservado-que-atraviesa-el-bosque-127487747.jpg">
				</div>
				</div>
			</div>
		
    
	</section>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
	data() {
    return {
      borrar: '',
    };
  },
  methods: {
    sendEmail(event) {
      emailjs
        .sendForm('service_gwl393s', 'template_u82bm0q', this.$refs.form, 'brfBHyc5K938Xxg9u')
        .then(
          (result) => {
            alert('su mensaje fue enviado con exito');
            event.target.reset();
            console.log('SUCCESS!', result.text);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
};
</script>

<style>
  @import '../assets/adicionales/css/style.css';
</style>
<script>
</script>