import PropTypes from 'prop-types';

export const Props = ({ titulo='algo', name, anios }) => {

    return (
        <>
            <h1>{`Hoola esto es el manejo de props ${titulo} una prueba de  ${name} desde los ${anios}` } </h1>
        </>
    )   
}

Props.propTypes = {
    titulo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    anios: PropTypes.number
}


Props.defaultProps = {
    name: 'Sin nombre',
    anios: 0
}