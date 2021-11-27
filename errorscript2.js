// This shows examples related with React.
import { Component } from 'react';
// import ReactDOM from 'react-dom';
// export class ReactApiTypo extends Component {
//     check() {
//     }
//     componentDidMount() {
//         this.check();
//     }
//     componentDidUpate() {
//         this.check();
//     }
//     render() {
//         return null;
//     }
// }
// export class BadReactApiReturnValue extends Component {
//     render() {
//         if (!this.props.site || !this.props.plugin) {
//             return;
//         }
//         if (this.props.site.canUpdateFiles) {
//             return this.renderUpdate();
//         }
//         return null;
//     }
// }
// export class MissingReturnValue extends Component {
//     recordFieldFocus(fieldId) {
//         console.log('Focused on field', fieldId);
//     }
//     render() {
//         return (
//             <RoleSelect onFocus={ this.recordFieldFocus('roles') } />
//         );
//     }
// }
// export class BadUnknownProp extends Component {
//     render() {
//         return (
//             <div>
//                 <iframe src={url} frameborder="0" scrolling="no"></iframe>
//             </div>
//         );
//     }
// }
export class ReactApiTypo extends Component {
    check() {
    }
    componentDidMount() {
        this.check();
    }
    componentDidUpdate() {
        this.check();
    }
    render() {
        return null;
    }
}
export class MissingReturnValue extends Component {
    recordFieldFocus(fieldId) {
        console.log('Focused on field', fieldId);
    }
    render() {
        return (
            <RoleSelect onFocus={ recordFieldFocus('roles') } />
        );
    }
}
export class BadUnknownProp extends Component {
    render() {
        return (
            <div>
                <iframe src={url} frameorder="0" scrolling="no"></iframe>
            </div>
        );
    }
}