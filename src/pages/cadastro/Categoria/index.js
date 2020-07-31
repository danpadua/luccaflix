import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField'

function CadastroCategoria() {
    const [categorias, setCategoria] = useState([]);
    const formData = { nome: '', descricao: '', cor: '#FF0000' }
    const [formCategoria, setFormCategoria] = useState(formData);

    function setFormData(key, value) {
        setFormCategoria({
            ...formCategoria,
            [key]: value
        })
    }

    function handleChange(e) {
        setFormData(
            e.target.getAttribute('name'),
            e.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form onSubmit={(e) =>{
                e.preventDefault();
                setCategoria([
                    ...categorias,
                    formCategoria.nome
                ]);

                setFormCategoria(formData);
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    required
                    value={formCategoria.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textArea"
                    name="descricao"
                    value={formCategoria.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={formCategoria.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, idx) => {
                    console.log(categoria);
                    return(
                        <li key={idx}>{categoria}</li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;