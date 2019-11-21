using Contracts;
using Entities;
using Entities.Models;
using System.Collections.Generic;
using System.Linq;

namespace Repository
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(RepositoryContext repositoryContext)
            :base(repositoryContext)
        {
        }

        public IEnumerable<User> GetAllUsers()
        {
            return FindAll()
                .OrderBy(user => user.DateRegistered)
                .ToList();
        }

        public User GetUserById(int Id)
        {
            return FindByCondition(user => user.UserId.Equals(Id))
                .FirstOrDefault();
        }

        public void CreateUser(User user)
        {
            Create(user);
        }
    }
}
