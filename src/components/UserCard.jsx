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
        <div className="card mt-20 mx-auto w-4/12 rounded overflow-hidden shadow-lg">
            {user && (
                <div className="flex border bottom-2 rounded-xl gap-5 p-5">
                    <div>
                        <img className="w-full rounded-xl" src={user.picture.large} alt={user.name.first} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{`${user.name.first} ${user.name.last}`}</div>
                        <p className="text-gray-700 text-base">
                            Gender: {user.gender}
                        </p>
                        <p className="text-gray-700 text-base">
                            Phone Number: {user.phone}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserCard;