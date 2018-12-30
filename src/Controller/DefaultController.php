<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends AbstractController
{
  /**
   * @Route("/", name="homepage")
   */
  public function homePage(Request $request)
  {
     return $this->render('pages/homepage.html.twig');
  }

  /**
   * @Route("/reserver", name="book")
   */
  public function book()
  {
     return $this->render('pages/book.html.twig');
  }
}
