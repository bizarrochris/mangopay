var assert = require('chai').assert
  , expect = require('chai').expect
  , Mango = require('../index')
  , Creds = require('./__credentials.json')

describe('Mango wrapper', function(){

  it('expect credentials', function(){

    expect(Mango.bind(null,{})).to.throw('Provide credentials')
  
  })

  it('use sandbox as default', function(){

    var mango = Mango({
      username: Creds.username,
      password: Creds.password
    })

    assert.equal(mango._api.host, 'api.sandbox.mangopay.com')
    assert.equal(mango._api.protocol, 'https')

  })

})
