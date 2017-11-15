using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CFPortfolio01.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Start()
        {
            ViewBag.Title = "START";
            ViewBag.Message = "Your Start page.";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Title = "ABOUT";
            ViewBag.Message = "Your About page.";
            return View();
        }

        public ActionResult JSExercises()
        {
            ViewBag.Title = "JSEXERCISES";
            ViewBag.Message = "Your JSExercises page.";
            return View();
        }

        public ActionResult Portfolio()
        {
            ViewBag.Title = "PORTFOLIO";
            ViewBag.Message = "Your Portfolio page.";
            return View();
        }

        public ActionResult Resume()
        {
            ViewBag.Title = "RESUME";
            ViewBag.Message = "Your Resume page.";
            return View();
        }

        public ActionResult Other()
        {
            ViewBag.Title = "OTHER";
            ViewBag.Message = "Your Other page.";
            return View();
        }

    public ActionResult Contact()
        {
            ViewBag.Title = "CONTACT";
            ViewBag.Message = "Your Contact page.";
            return View();
        }
    }
}