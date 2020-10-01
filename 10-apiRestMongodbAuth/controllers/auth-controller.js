'use strict';
const AuthModel = require('../models/auth-model'),
      errors = require('../middlewares/errors'),
      am = new AuthModel();
class AuthController{
    index(req, res, next){//comprueba autenticacion
        if ( req.session.username ) {
            res.redirect('/teams');
        }else {
            res.render('login-form', {
                title : 'Autenticacion de Usuarios',
                message : req.query.message
            })
        }
    }
    loginGet(req, res, next){//comprueba autenticacion
        res.redirect('/');
    }
    loginPost(req, res, next){//comprueba autenticacion
        let user = {
            username : req.body.username,
            password : req.body.password
        };
        console.log(user);
        am.getUser(user, (docs) => {
            req.session.username = ( docs != null ) ? user.username : null;
            console.log(req.session, '---', docs);
            return (req.session.username) 
                ? res.redirect('/teams') 
                : errors.http401(req, res, next);
        });
    }
    signinGet(req, res, next){//comprueba autenticacion
        res.render('signin-form', { title : "Registro de Usuarios" });
    }
    signinPost(req, res, next){//comprueba autenticacion
        let user = {
            user_id : 0,
            username : req.body.username,
            password : req.body.password
        };
        console.log(user);
        am.setUser(user, () => {
            res.redirect(`/?message=El usuario ${user.username} ha sido creado`);
        });
    }
    logOut(req, res, next){//comprueba autenticacion
        req.session.destroy((err) => {
            return (err)
                ? errors.http500(req, res, next)
                : res.redirect('/');
        });
    }
}
module.exports = AuthController;