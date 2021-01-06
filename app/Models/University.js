'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class University extends Model {
    Students() {
        return this.hasMany('App/Models/Student')
    }
}

module.exports = University