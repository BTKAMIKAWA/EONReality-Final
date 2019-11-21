﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entities.DataTransferObjects
{
    public class UserForCreationDto
    {
       

        [Required(ErrorMessage = "Name is required!")]
        [StringLength(30)]
        public string Name { get; set; }

        [Required(ErrorMessage = "Please include Email address")]
        [DataType(DataType.EmailAddress)]
        [StringLength(50)]
        public string Email { get; set; }
        public string Gender { get; set; }

        [Required(ErrorMessage = "Please enter todays date")]
        public DateTime DateRegistered { get; set; }

        public string AdditionalRequest { get; set; }

    }
}
