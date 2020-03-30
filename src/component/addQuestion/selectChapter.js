import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
// import Class6WiseChapter from "./class6";
import "../mycss.css";

function SelectType() {
  const history = useHistory();
  const [cls, setCls] = useState("");
  const [chapter, setChapter] = useState("");
  const [type, setType] = useState("");
  const location = useLocation();

  function myFunction() {
    var x = document.getElementById("inputGroupSelect01").value;
    setChapter(x);
  }

  function myFunction2() {
    var x = document.getElementById("inputGroupSelect02").value;
    setType(x);
  }
  useEffect(() => {
    console.log(location.state);
    console.log(chapter);
    setCls(location.state);
  }, []);
  function class6WiseChapter() {
    {
      console.log("called 6");
    }
    return (
      <select
        class="custom-select"
        id="inputGroupSelect01"
        onChange={() => myFunction()}
      >
        <option value="---">Choose...</option>
        <option value="Chapter 1 - Knowing Our Numbers">
          Chapter 1 - Knowing Our Numbers
        </option>
        <option value="Chapter 2 - Whole Numbers">
          Chapter 2 - Whole Numbers
        </option>
        <option value="Chapter 3 - Playing with Numbers">
          Chapter 3 - Playing with Numbers
        </option>
        <option value="Chapter 4 - Basic Geometrical Ideas">
          Chapter 4 - Basic Geometrical Ideas
        </option>
        <option value="Chapter 5 - Understanding Elementary Shapes">
          Chapter 5 - Understanding Elementary Shapes
        </option>
        <option value="Chapter 6 - Integers">Chapter 6 - Integers</option>
        <option value="Chapter 7 - Fractions">Chapter 7 - Fractions</option>
        <option value="Chapter 8 - Decimals">Chapter 8 - Decimals</option>
        <option value="Chapter 9 - Data Handling">
          Chapter 9 - Data Handling
        </option>
        <option value="Chapter 10 - Mensuration">
          Chapter 10 - Mensuration
        </option>
        <option value="Chapter 11 - Algebra">Chapter 11 - Algebra</option>
        <option value="Chapter 12 - Ratio and Proportion">
          Chapter 12 - Ratio and Proportion
        </option>
        <option value="Chapter 13 - Symmetry">Chapter 13 - Symmetry</option>
        <option value="Chapter 14 - Practical Geometry">
          Chapter 14 - Practical Geometry
        </option>
      </select>
    );
  }
  function class7WiseChapter() {
    {
      console.log("called 7");
    }
    return (
      <select
        class="custom-select"
        id="inputGroupSelect01"
        onChange={() => myFunction()}
      >
        <option value="---">Choose...</option>
        <option value="Chapter 1 - Integers">Chapter 1 - Integers</option>
        <option value="Chapter 2 - Fractions and Decimals">
          Chapter 2 - Fractions and Decimals
        </option>
        <option value="Chapter 3 - Data Handling">
          Chapter 3 - Data Handling
        </option>
        <option value="Chapter 4 - Simple Equations">
          Chapter 4 - Simple Equations
        </option>
        <option value="Chapter 5 - Lines and Angles">
          Chapter 5 - Lines and Angles
        </option>
        <option value="Chapter 6 - The Triangle and Its Properties">
          Chapter 6 - The Triangle and Its Properties
        </option>
        <option value="Chapter 7 - Congruence of Triangles">
          Chapter 7 - Congruence of Triangles
        </option>
        <option value="Chapter 8 - Comparing Quantities">
          Chapter 8 - Comparing Quantities
        </option>
        <option value="Chapter 9 - Rational Numbers">
          Chapter 9 - Rational Numbers
        </option>
        <option value="Chapter 10 - Practical Geometry">
          Chapter 10 - Practical Geometry
        </option>
        <option value="Chapter 11 - Perimeter and Area">
          Chapter 11 - Perimeter and Area
        </option>
        <option value="Chapter 12 - Algebraic Expressions">
          Chapter 12 - Algebraic Expressions
        </option>
        <option value="Chapter 13 - Exponents and Powers">
          Chapter 13 - Exponents and Powers
        </option>
        <option value="Chapter 14 - Symmetry">Chapter 14 - Symmetry</option>
        <option value="Chapter 15 - Visualising Solid Shapes">
          Chapter 15 - Visualising Solid Shapes
        </option>
      </select>
    );
  }
  function class8WiseChapter() {
    return (
      <select
        class="custom-select"
        id="inputGroupSelect01"
        onChange={() => myFunction()}
      >
        <option value="---">Choose...</option>
        <option value="Chapter 1 - Rational Numbers">
          Chapter 1 - Rational Numbers
        </option>
        <option value="Chapter 2 - Linear Equations in One Variable">
          Chapter 2 - Linear Equations in One Variable
        </option>
        <option value="Chapter 3 - Understanding Quadrilaterals">
          Chapter 3 - Understanding Quadrilaterals
        </option>
        <option value="Chapter 4 - Practical Geometry">
          Chapter 4 - Practical Geometry
        </option>
        <option value="Chapter 5 - Data Handling">
          Chapter 5 - Data Handling
        </option>
        <option value="Chapter 6 - Squares and Square Roots">
          Chapter 6 - Squares and Square Roots
        </option>
        <option value="Chapter 7 - Cubes and Cube Roots">
          Chapter 7 - Cubes and Cube Roots
        </option>
        <option value="Chapter 8 - Comparing Quantities">
          Chapter 8 - Comparing Quantities
        </option>
        <option value="Chapter 9 - Algebraic Expressions and Identities">
          Chapter 9 - Algebraic Expressions and Identities
        </option>
        <option value="Chapter 10 - Visualising Solid Shapes">
          Chapter 10 - Visualising Solid Shapes
        </option>
        <option value="Chapter 11 - Mensuration">
          Chapter 11 - Mensuration
        </option>
        <option value="Chapter 12 - Exponents and Powers">
          Chapter 12 - Exponents and Powers
        </option>
        <option value="Chapter 13 - Direct and Inverse Proportions">
          Chapter 13 - Direct and Inverse Proportions
        </option>
        <option value="Chapter 14 - Factorisation">
          Chapter 14 - Factorisation
        </option>
        <option value="Chapter 15 - Introduction to Graphs">
          Chapter 15 - Introduction to Graphs
        </option>
        <option value="Chapter 16 - Playing with Numbers">
          Chapter 16 - Playing with Numbers
        </option>
      </select>
    );
  }
  function class9WiseChapter() {
    return (
      <select
        class="custom-select"
        id="inputGroupSelect01"
        onChange={() => myFunction()}
      >
        <option value="---">Choose...</option>
        <option value="Chapter 1 - Number Systems">
          Chapter 1 - Number Systems
        </option>
        <option value="Chapter 2 - Polynomials">Chapter 2 - Polynomials</option>
        <option value="Chapter 3 - Coordinate Geometry">
          Chapter 3 - Coordinate Geometry
        </option>
        <option value="Chapter 4 - Linear Equations in Two Variables">
          Chapter 4 - Linear Equations in Two Variables
        </option>
        <option value="Chapter 5 - Introduction to Euclids Geometry">
          Chapter 5 - Introduction to Euclids Geometry
        </option>
        <option value="Chapter 6 - Lines and Angles">
          Chapter 6 - Lines and Angles
        </option>
        <option value="Chapter 7 - Triangles">Chapter 7 - Triangles</option>
        <option value="Chapter 8 - Quadrilaterals">
          Chapter 8 - Quadrilaterals
        </option>
        <option value="Chapter 9 - Areas of Parallelograms and Triangles">
          Chapter 9 - Areas of Parallelograms and Triangles
        </option>
        <option value="Chapter 10 - Circles">Chapter 10 - Circles</option>
        <option value="Chapter 11 - Constructions">
          Chapter 11 - Constructions
        </option>
        <option value="Chapter 12 - Heron's Formula">
          Chapter 12 - Heron's Formula
        </option>
        <option value="Chapter 13 - Surface Areas and Volumes">
          Chapter 13 - Surface Areas and Volumes
        </option>
        <option value="Chapter 14 - Statistics">Chapter 14 - Statistics</option>
        <option value="Chapter 15 - Probability">
          Chapter 15 - Probability
        </option>
      </select>
    );
  }
  function class10WiseChapter() {
    return (
      <select
        class="custom-select"
        id="inputGroupSelect01"
        onChange={() => myFunction()}
      >
        <option value="---">Choose...</option>
        <option value="Chapter 1 - Real Numbers">
          Chapter 1 - Real Numbers
        </option>
        <option value="Chapter 2 - Polynomials">Chapter 2 - Polynomials</option>
        <option value="Chapter 3 - Pair of Linear Equations in Two Variables">
          Chapter 3 - Pair of Linear Equations in Two Variables
        </option>
        <option value="Chapter 4 - Quadratic Equations">
          Chapter 4 - Quadratic Equations
        </option>
        <option value="Chapter 5 - Arithmetic Progressions">
          Chapter 5 - Arithmetic Progressions
        </option>
        <option value="Chapter 6 - Triangles">Chapter 6 - Triangles</option>
        <option value="Chapter 7 - Coordinate Geometry">
          Chapter 7 - Coordinate Geometry
        </option>
        <option value="Chapter 8 - Introduction to Trigonometry">
          Chapter 8 - Introduction to Trigonometry
        </option>
        <option value="Chapter 9 - Some Applications of Trigonometry">
          Chapter 9 - Some Applications of Trigonometry
        </option>
        <option value="Chapter 10 - Circles">Chapter 10 - Circles</option>
        <option value="Chapter 11 - Constructions">
          Chapter 11 - Constructions
        </option>
        <option value="Chapter 12 - Areas Related to Circles">
          Chapter 12 - Areas Related to Circles
        </option>
        <option value="Chapter 13 - Surface Areas and Volumes">
          Chapter 13 - Surface Areas and Volumes
        </option>
        <option value="Chapter 14 - Statistics">Chapter 14 - Statistics</option>
        <option value="Chapter 15 - Probability">
          Chapter 15 - Probability
        </option>
      </select>
    );
  }
  function class11WiseChapter() {
    return (
      <select
        class="custom-select"
        id="inputGroupSelect01"
        onChange={() => myFunction()}
      >
        <option value="---">Choose...</option>
        <option value="Chapter 1 - Sets">Chapter 1 - Sets</option>
        <option value="Chapter 2 - Relations and Functions">
          Chapter 2 - Relations and Functions
        </option>
        <option value="Chapter 3 - Trigonometric Functions">
          Chapter 3 - Trigonometric Functions
        </option>
        <option value="Chapter 4 - Principle of Mathematical Induction">
          Chapter 4 - Principle of Mathematical Induction
        </option>
        <option value="Chapter 5 - Complex Numbers and Quadratic Equations">
          Chapter 5 - Complex Numbers and Quadratic Equations
        </option>
        <option value="Chapter 6 - Linear Inequalities">
          Chapter 6 - Linear Inequalities
        </option>
        <option value="Chapter 7 - Permutations and Combinations">
          Chapter 7 - Permutations and Combinations
        </option>
        <option value="Chapter 8 - Binomial Theorem">
          Chapter 8 - Binomial Theorem
        </option>
        <option value="Chapter 9 - Sequences and Series">
          Chapter 9 - Sequences and Series
        </option>
        <option value="Chapter 10 - Straight Lines">
          Chapter 10 - Straight Lines
        </option>
        <option value="Chapter 11 - Conic Sections">
          Chapter 11 - Conic Sections
        </option>
        <option value="Chapter 12 - Introduction to Three Dimensional Geometry">
          Chapter 12 - Introduction to Three Dimensional Geometry
        </option>
        <option value="Chapter 13 - Limits and Derivatives">
          Chapter 13 - Limits and Derivatives
        </option>
        <option value="Chapter 14 - Mathematical Reasoning">
          Chapter 14 - Mathematical Reasoning
        </option>
        <option value="Chapter 15 - Statistics">Chapter 15 - Statistics</option>
        <option value="Chapter 16 - Probability">
          Chapter 16 - Probability
        </option>
      </select>
    );
  }
  function class12WiseChapter() {
    return (
      <select
        class="custom-select"
        id="inputGroupSelect01"
        onChange={() => myFunction()}
      >
        <option value="---">Choose...</option>
        <option value="Chapter 1 - Relations and Functions">
          Chapter 1 - Relations and Functions
        </option>
        <option value="Chapter 2 - Inverse Trigonometric Functions">
          Chapter 2 - Inverse Trigonometric Functions
        </option>
        <option value="Chapter 3 - Matrices">Chapter 3 - Matrices</option>
        <option value="Chapter 4 - Determinants">
          Chapter 4 - Determinants
        </option>
        <option value="Chapter 5 - Continuity and Differentiability">
          Chapter 5 - Continuity and Differentiability
        </option>
        <option value="Chapter 6 - Application of Derivatives">
          Chapter 6 - Application of Derivatives
        </option>
        <option value="Chapter 7 - Integrals">Chapter 7 - Integrals</option>
        <option value="Chapter 8 - Application of Integrals">
          Chapter 8 - Application of Integrals
        </option>
        <option value="Chapter 9 - Differential Equations">
          Chapter 9 - Differential Equations
        </option>
        <option value="Chapter 10 - Vector Algebra">
          Chapter 10 - Vector Algebra
        </option>
        <option value="Chapter 11 - Three Dimensional Geometry">
          Chapter 11 - Three Dimensional Geometry
        </option>
        <option value="Chapter 12 - Linear Programming">
          Chapter 12 - Linear Programming
        </option>
        <option value="Chapter 13 - Probability">
          Chapter 13 - Probability
        </option>
      </select>
    );
  }
  function selectClass() {
    switch (cls) {
      case "6":
        return class6WiseChapter();
      case "7":
        return class7WiseChapter();
      case "8":
        return class8WiseChapter();
      case "9":
        return class9WiseChapter();
      case "10":
        return class10WiseChapter();
      case "11":
        return class11WiseChapter();
      default:
        return class12WiseChapter();
    }
  }
  return (
    <div className="container">
      <div className="box">
        <div className="header">
          <h3>Select Chapter and Types</h3>
        </div>
        <div className="category">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                Select Chapter
              </label>
            </div>
            {selectClass()}
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect02">
                Select Question Type
              </label>
            </div>
            <select
              class="custom-select"
              id="inputGroupSelect02"
              onChange={() => myFunction2()}
              required
            >
              <option value="---">Choose...</option>

              <option value="Very Short Questions">Very Short Questions</option>
              <option value="Short Type-I Questions">
                Short Type-I Questions
              </option>
              <option value="Short Type-II Questions">
                Short Type-II Questions
              </option>
              <option value="Long Questions">Long Questions</option>
            </select>
          </div>
        </div>
        <div className="btns">
          <Link
            to={{
              pathname: "/class/" + cls + "/write",
              state: cls,
              ChapterState: chapter,
              TypeState: type
            }}
          >
            {cls ? (
              <button type="button" class="btn btn-outline-success">
                Next
              </button>
            ) : (
              <button type="button" class="btn btn-outline-success" disabled>
                Next
              </button>
            )}
          </Link>
          <button
            className="btn btn-outline-warning"
            onClick={() => history.goBack()}
          >
            Back
          </button>
        </div>
        <Link to="/">
          <button className="my-btn btn-outline-primary">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default SelectType;
