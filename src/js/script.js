function resultado()
{
    let estados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
    let capitais = ['Rio Branco','Maceió','Macapá','Manaus','Salvador','Fortaleza','Brasília','Vitória','Goiânia','São Luís','Cuiabá','Campo Grande','Belo Horizonte','Belém','João Pessoa','Curitiba','Recife','Teresina','Rio de Janeiro','Natal','Porto Alegre','Porto Velho','Boa Vista','Florianópolis','São Paulo','Aracaju','Palmas'];
    let nascEsts = ['Acriano','Alagoano','Amapaense','Amazonense','Baiano','Cearense','Brasiliense','Capixaba','Goiano','Maranhense','Mato-grossense','Sul-mato-grossense','Mineiro','Paraense','Paraibano','Paranaense','Pernambucano','Piauiense','Fluminense','Potiguar','Gaúcho','Rondoniense','Roraimense','Catarinense','Paulista','Sergipano','Tocantinense'];
    let nascCas = ['Rio-branquense','Maceioense','Macapaense','Manauara','Soteropolitano','Fortalezense','Brasiliense','Vitoriense','Goianiense','Ludovicense','Cuiabano','Campo-grandense','Belo-horizontino','Belenense','Pessoense','Curitibano','Recifense','Teresinense','Carioca','Natalense','Porto-alegrense','Porto-velhense','Boa-vistense','Florianopolitano','Paulistano','Aracajuano','Palmense'];
    let siglas = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

    let uf = document.getElementById('uf');
    let estado = document.getElementById('estado');
    let capital = document.getElementById('capital');
    let nascEst = document.getElementById('nascEs');
    let nascCa = document.getElementById('nascCap');
    let a = uf.value.toUpperCase();
    let erro = '';
    let indice = 0;

    for (let sigla in siglas)
    {
        if (a == siglas[sigla])
        {
            
            uf.value = a;
            estado.innerHTML = 'Estado: ' + estados[sigla];
            capital.innerHTML = 'Capital: ' + capitais[sigla];
            nascEst.innerHTML = 'Quem nasce no estado: ' + nascEsts[sigla];
            nascCa.innerHTML = 'Quem nasce na capital: ' + nascCas[sigla];
            indice = sigla;
        }
        
        else
        {
           erro = 'Dígito inválido, por favor digite uma sigla de estado brasileiro válido';
           indice += 1;
           uf.focus();
        }

    }

    if (erro == 'Dígito inválido, por favor digite uma sigla de estado brasileiro válido' && indice == 27)
        {
            uf.value = '';
            alert(erro);
        }
}