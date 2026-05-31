export const isLogged = () => {
    const token = localStorage.getItem('token');

    const user = token ? JSON.parse(token) : null;

    return user;
}

export const login = (user) => {
    localStorage.setItem('token', JSON.stringify(user));
}