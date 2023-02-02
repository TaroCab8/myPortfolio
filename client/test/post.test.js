import auth from './../auth/auth-helper.js'
import Post from './../post/Post.js'
import React from 'react'
import renderer from 'react-test-renderer'
import {MemoryRouter} from 'react-router-dom'


jest.mock('./../auth/auth-helper.js')

const dummyPostObject = {"_id":"5a3cb2399bcc621874d7e42f", "postedBy":{"_id":"5a3cb1779bcc62187d7e428","name":"Joe"},"text":"hey!","created":"2017-12-22T07:20:25.611Z","comments":[], "likes":[]}

const dummyAuthObject = {user: {"_id":"5a3bc1779bcc621874d7e428","name":"Joe","email":"abc@def.com"}}

test('delete option visible only to authorized user', () => {
    const post = dummyPostObject
    const auth = dummyAuthObject

    jest.fn().mockReturnValue(aut.isAuthenticated())

    const component = renderer.create(
        <MemoryRouter>
            <Post post={post} key={post._id}></Post>
        </MemoryRouter>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})