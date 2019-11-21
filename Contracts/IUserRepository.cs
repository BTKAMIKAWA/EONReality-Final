using Entities.Models;
using System.Collections.Generic;

namespace Contracts
{
    public interface IUserRepository 
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int Id);
        void CreateUser(User user);
    }
}
