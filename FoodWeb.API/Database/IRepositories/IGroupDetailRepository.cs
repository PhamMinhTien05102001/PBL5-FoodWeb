using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodWeb.API.Database.Entities;
using FoodWeb.API.DTOs;

namespace FoodWeb.API.Database.IRepositories
{
    public interface IGroupDetailRepository
    {
        public void CreateGroupDetail(int idAccount, int idGrop);

        public GroupDetail GetGroupDetailByIdAccount(int id);

        public GroupDetailDTO GetGroupDetailByIdUser(int IdUser);
    }
}