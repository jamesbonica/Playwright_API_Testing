import { test, expect } from '@playwright/test';


test('API POST Request', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        headers: {
            'x-api-key': 'reqres-free-v1'
        },
        data: {
            'name': 'JoeyV',
            'job': 'Slacker'
        }

    })

    expect(response.status()).toBe(201)

    const responseBody = await response.json();

    expect(responseBody.name).toBe('JoeyV')

    expect(responseBody.job).toBe('Slacker')

})

test('API PUT Request', async ({ request }) => {

    const response = await request.put('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': 'reqres-free-v1'
        },
        data: {
            'name': 'JoeyV',
            'job': 'Low IQ Stuff'
        }

    })

    expect(response.status()).toBe(200)

    const responseBody = await response.json();

    expect(responseBody.name).toBe('JoeyV')

    expect(responseBody.job).toBe('Low IQ Stuff')

})

test('API GET Request', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2', {

    })

    expect(response.status()).toBe(200)

    const responseBody = await response.json();

    expect(responseBody.data.first_name).toBe('Janet')

})

test('API DELETE Request', async ({ request }) => {

    const response = await request.delete('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }

    })

    expect(response.status()).toBe(204)

})