export default function errorHandler(error, toast) {
    let errorMessage

    if (error.response.data) {
        const errorDetails = error.response.data.error
        const errorCode = errorDetails.status
        const message = errorDetails.message
        errorMessage = `Error ${errorCode}: ${message}`
    }
    else
        errorMessage = error.message

    toast({
        title: errorMessage,
        status: "error",
        position: "top",
        duration: 7000,
        isClosable: true
    })
}