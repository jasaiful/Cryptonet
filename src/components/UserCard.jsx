import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const UserCard = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const res = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
                setUser(res.data.results[0]);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {user && (
                <div>
                    <img className="w-full" src={user.picture.large} alt={user.name.first} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{`${user.name.first} ${user.name.last}`}</div>
                        <p className="text-gray-700 text-base">
                            Email: {user.email}
                        </p>
                        <p className="text-gray-700 text-base">
                            Phone: {user.phone}
                        </p>
                        <p className="text-gray-700 text-base">
                            Age: {user.dob.age}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserCard;