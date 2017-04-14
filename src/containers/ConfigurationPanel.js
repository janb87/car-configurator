import { connect } from 'react-redux';
import ConfigurationEditor from '../components/ConfigurationEditor';

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(ConfigurationEditor);
