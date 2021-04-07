<template>
    <div class="col-6 col-md-6 mb-3 mh-100" :class="classObject">
		<div class="card mh-100 exame-card collapsed" data-bs-toggle="collapse" :data-bs-target="'#exame_card_collapse_'+id">
			<div class="card-body">

				<h5 class="card-title mb-1">
                    {{ titulo }}
                    <i class="fa fa-chevron-up float-end text-secondary fa-sm"></i>
                    <i class="fa fa-chevron-down float-end text-secondary fa-sm"></i>
				</h5>
				<p class="card-text mb-1 text-muted">
					<i class="fas fa-calendar-alt"></i>&nbsp;
                    {{ data }}
				</p>

				<span class="badge border border-secondary text-muted me-1 " v-for="(tag, index) in tags" :key="index">{{ tag }}</span>

                <div class="exame-card-collapse collapse mt-3" :id="'exame_card_collapse_'+id">
                    <h6>Compartilhamentos</h6>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(comp, index) in compartilhamentos" :key="'compartilhamento_'+index">
                        <div>
                            {{comp}}
                            <br>
                            <small class="text-muted">Compartilhado em 01/01/2001</small>
                        </div>
                        <i class="fa fa-times text-muted" role="button"></i>  
                        </li>
                    </ul>

                    <div class="w-full d-flex justify-content-between">
                        <button class="btn btn-sm btn-outline-danger">
                        <i class="fa fa-trash"></i>&nbsp;Apagar
                        </button>
                        <button class="btn btn-sm btn-outline-primary">
                        <i class="fa fa-edit"></i>&nbsp;Editar
                        </button>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'ExameCard',
    data() {
        return {
            titulo: "Exame tal",
            data: "03/04/2021",
            compartilhamentos: ['Clinica Nicolas'],
            tags: ["Tag 01", "Tag 02"]
        }
    },
    props: {
        id: Number
    }
}
</script>