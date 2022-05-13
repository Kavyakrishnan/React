import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="container">
    <div className=" g-3">
        <div className="container">
            <div className="row g-2">
                <div className="col col-2 col-sm-12 col-xl-12 col-xxl-12 col-md-12">
                   <label for="USERNAME" className="label-control">USERNAME</label> 
                   <input placeholder='Enter name' type="text" className="form-control"/>
                </div>
            
        
        <div className="col col-12 col-sm-6 col-xl-6 col-xxl-6 col-md-6">
            <label for="PASSWORD" className="label-control">PASSWORD</label> 
            <input placeholder='Enter password' type="password" name="Password" id="" className="form-control"/>
            
        </div>
        <div className="col col-12 col-sm-612col-xl-12 col-xxl-12 col-md-12">
            <button className="btn btn-success">Login</button>
        </div>
        
    </div>
</div>
</div>
</div>

  );
}

export default App;
