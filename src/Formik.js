import { Formik, Form, Field } from 'formik';
import './App.css';
import './Verif.js'
import * as Yup from 'yup';

//#region YupSchema

const SignupSchema = Yup.object().shape({
  nom: Yup.string()
    .required('Champ obligatoire')
    .min(2, 'Le nom doit contenir au moins 2 caractères'),
  prénom: Yup.string()
    .required('Champ obligatoire')
    .min(2, 'Le prénom doit contenir au moins 2 caractères'),
  email: Yup.string()
    .email('Adresse email invalide')
    .required('Champ obligatoire'),
  password: Yup.string()
    .required('Champ obligatoire')
    .min(8, 'Le mot de passe doit faire 8 caractères minimum'),
  verifpwd: Yup.string()
    .required('Champ obligatoire')
    .oneOf([Yup.ref('password'), null], 'La confirmation doit être identique au mot de passe')

});

//#endregion

//#region Form
export const App = () => 
(
  <div>
    <h1 className='White marginleft137'>Formulaire d'inscription</h1>
    <Formik
      initialValues ={{
        nom:'',
        prénom:'',
        email:'',
        password:'',
        verifpwd:'',
      }}
      validationSchema={SignupSchema}
      onSubmit ={ values => {
        console.log(values);
      }}
    >
    {({errors, touched, validateForm}) => 
    (
        <Form onSubmit={Formik.handleSubmit}>

          {errors.nom && touched.nom && <div className='RedBack150 MarginLeft50andTop20'>{errors.nom}</div>}
          <Field className="Margin-Bot-15 inputStyle marginleft137" placeholder="Nom*" name="nom" type="text" />
          <br/>

          {errors.prénom && touched.prénom && <div className='RedBack150 MarginLeft50andTop20'>{errors.prénom}</div>}
          <Field className="Margin-Bot-15 inputStyle marginleft137" placeholder="Prénom*" id="prénom" name="prénom" type="text"/>
          <br/>

          {errors.email && touched.email && <div className='RedBack150 MarginLeft50andTop20'>{errors.email}</div>}
          <Field className="Margin-Bot-15 inputStyle marginleft137" placeholder="E-Mail*" id="email" name="email" type="email"/>
          <br/>

          {errors.password && touched.password && <div className='RedBack150 MarginLeft50andTop20'>{errors.password}</div>}
          <Field className="Margin-Bot-15 inputStyle marginleft137" placeholder="Mot de passe*" id="password" name="password" type="password"/>
          <br/>

          {errors.verifpwd && touched.verifpwd && <div className='RedBack150 MarginLeft50andTop20'>{errors.verifpwd}</div>}
          <Field className="Margin-Bot-15 inputStyle marginleft137" placeholder="Confirmation*" id="verifpwd" name="verifpwd" type="password" />
          <br/>

          <button className="marginleft137 submitStyle" name="submit" type="submit" onClick={() => validateForm()}>Submit</button>
        </Form>
    )}
    </Formik>
  </div>
);
export default App;
//#endregion