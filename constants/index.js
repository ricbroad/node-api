module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product Created Successfully',
        PRODUCT_UPDATED: 'Product Updated Successfully',
        PRODUCT_FETCHED: 'Product Fetched Successfully',
        PRODUCT_NOT_FOUND: 'Product not found',
        PRODUCT_DELETED: 'Product Deleted Successfully'
        
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields',
        TOKEN_MISSING: 'Token missing from header'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup success',
        LOGIN_SUCCESS: 'Login success',
        USER_NOT_FOUND: 'User not found',
        INCORRECT_PASSWORD: 'Incorrect password',
        DUPLICATE_EMAIL: 'User already exists with given email'
    }
}